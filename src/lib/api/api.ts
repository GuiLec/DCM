import wretch from 'wretch';

export const DCM_API = () =>
  wretch()
    .url('http://localhost:3000')
    .catcher(400, error => {
      throw error;
    });
