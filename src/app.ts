import { ResponseError } from 'umi-request';

export const request = {
  prefix: 'https://pvp.qq.com',
  errorHandler: (error: ResponseError) => {
    console.log(error);
  },
};
