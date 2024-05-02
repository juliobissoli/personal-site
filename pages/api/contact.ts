import { NextApiRequest, NextApiResponse } from "next"

type ReqData = {
    email: string;
    name: string;
    message: string;
    isValid: boolean;
}

// export default async function (
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     try {
//         console.log(req.body)

//         const nodemailer = require('nodemailer')

//         const transporter = nodemailer.createTransport(
//             {
//                 service: 'hotmail',
//                 auth: {
//                     user: 'jcsbissoli@hotmail.com',
//                     pass: '****',
//                 }
//             }
//         )

//         console.log('passo aqui')

//         const emailData = {
//             from: 'jcsbissoli@hotmail.com',
//             to: 'juliobissoli33@gmail.com',
//             subject: `Contato via portifólio |  ${req.body.name}`,
//             text: `${req.body.message} \n\n email de contato: ${req.body.email}`,
//         }


//         const info = await transporter.sendMail(emailData);
//         res.status(200)
//         res.json({ success: true, message: `Email send success-full => ${info}` });
//         return res
//     } catch (error) {
//         console.error('Error to send e-mail:', error);

//         res.status(400)
//         res.json({ success: false, message: 'Error to send e-mail' })
//         return res;
//     }
// }

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export default async function (
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'juliobissoli33@gmail.com',
            subject: `Contato via portifólio |  ${req.body.name}`,
            html: `<p>${req.body.message} </p> <p> email de contato: ${req.body.email}</p>`
        });


        if (error) {
            return res.status(400).json(error);
        }

        res.status(200).json(data);


    } catch (error) {
        return res.status(500).json(error);
    }

}