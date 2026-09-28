import { z } from "zod";

export const updateParentSchema = z
    .object({
        firstName: z
            .string()
            .trim()
            .min(2, "First name must be at least 2 characters")
            .max(50)
            .optional(),

        lastName: z
            .string()
            .trim()
            .min(2, "Last name must be at least 2 characters")
            .max(50)
            .optional(),

        email: z
            .string()
            .trim()
            .email("Invalid email address")
            .optional(),

        phone: z
            .string()
            .trim()
            .min(10)
            .max(15)
            .optional(),

        avatar: z
            .string()
            .url("Avatar must be a valid URL")
            .optional(),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .optional(),
    })
    .strict();