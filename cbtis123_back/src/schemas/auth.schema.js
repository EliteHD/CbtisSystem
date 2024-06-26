const {z} = require('zod');

const registerSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email(),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters long'
    }),
});

const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email(),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters long'
    })
  
});

module.exports = {
    registerSchema,
    loginSchema
};


