const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authSchema = require('../schemas/auth.schema');

const register = async (req, res) => {
    try {
        const { email, password } = authSchema.registerSchema.parse(req.body);

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Usuario ya existe' });
        }
        user = new User({
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        jwt.sign(
            {
                id: user._id
            },

            process.env.JWT_SECRET || 'secretjos', { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.cookie('token', token);
                res.json(
                    {
                        token,
                        id: user._id,
                        email: user.email,
                        role: user.role,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    }
                )
            }
        )

    }
    catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        })
    }


}
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User
            .findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Usuario no existe' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Password invalidas' });
        }
        jwt.sign(
            {
                id: user._id
            },
            process
                .env.JWT_SECRET || 'secretjos', {
            expiresIn: 3600
        },
            (err, token) => {
                if (err) throw err;
                res.cookie('token', token);
                res.json(
                    {
                        token,
                        id: user._id,
                        email: user.email,
                        username: user.username,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    }
                )

            }
        )
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al loguear usuario' });
    }
}
const logout = (req, res) => {
    res.clearCookie('token');
    res.json({ msg: 'Logout exitoso' });
    return res.status(200);
}
const profile = async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

    return res.json({
        id: user._id,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    });
    res.send('Profile');
}

module.exports = { register, login, logout, profile };

