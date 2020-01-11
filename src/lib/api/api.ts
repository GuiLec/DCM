import wretch from 'wretch';

export const DCM_API = () =>
  wretch()
    .url('http://ec2-15-188-255-129.eu-west-3.compute.amazonaws.com:3000')
    .catcher(400, error => {
      throw error;
    });
