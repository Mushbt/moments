import { rest } from "msw";

const baseUrl = 'https://task-manager-hbt-8627598f1957.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
                pk: 27,
                username: "admin3",
                email:"",
                first_name:"",
                last_name:"",
                profile_id:26,
                profile_image:
                    "https://res.cloudinary.com/dyi1q4uqb/image/upload/v1/media/../default_profile_q3gtit",
                })
                );
              }),
              rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
                return res(ctx.status(200));
              }),
            ];