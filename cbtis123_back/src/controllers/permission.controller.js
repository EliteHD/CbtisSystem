

const Permission = require('../models/permission.model');

const addPermission = async (req, res) => {
    //add new permission and check if it already exists
    try {
        const { permission_name, permission_description, is_default } = req.body;
        let permission = await Permission.findOne({ permission_name });
        if (permission) {
            return res.status(400).json({ message: 'Permission already exists' });
        }
        permission = new Permission({
            permission_name,
            permission_description,
            is_default
        });
        await permission.save();
        res.status(200).json(permission);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }


}

const getPermissions = async (req, res) => {
    try {
        const permissions = await Permission.find();
        res.status(200).json(permissions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getPermission = async (req, res) => {
    try {
        const { id } = req.params;
        const permission = await Permission.findById(id);
        res.status(200).json(permission);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updatePermission = async (req, res) => {
    try {
        const { id } = req.params;
        const { permission_name, permission_description, is_default } = req.body;
        const permission = await Permission.findById(id);
        if (permission) {
            permission.permission_name = permission_name;
            permission.permission_description = permission_description;
            permission.is_default = is_default;
            await permission.save();
            res.status(200).json(permission);
        } else {
            res.status(404).json({ message: 'Permission not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deletePermission = async (req, res) => {
    try {
        const { id } = req.params;
        await Permission.findByIdAndDelete(id);
        res.status(200).json({ message: 'Permission deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    addPermission,
    getPermissions,
    getPermission,
    updatePermission,
    deletePermission
}


