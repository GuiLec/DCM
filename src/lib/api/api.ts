import wretch from 'wretch';

export const DCM_API = () =>
  wretch()
    .url('http://ec2-3-12-10-77.us-east-2.compute.amazonaws.com:3000')
    .catcher(400, error => {
      throw error;
    });
