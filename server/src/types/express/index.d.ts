import {} from '';

// declare global {
//     namespace Express {
//         export interface Request {
//             myError?: Error;
//             user?: User;
//         }
//     }
// }

declare module 'express-serve-static-core' {
    interface Request {
        myError?: string;
    }
}
