// @flow
import storage from '../../helpers/storage';
import gql from 'graphql-tag';

export type FormParams = {
  url: string,
  u?: string,
  p?: string,
  db?: string, // required for most SELECT and SHOW queries
  q?: string,
};

export const updateForm = (
  _obj: void,
  submitted: FormParams,
  { cache }: any,
): null => {
  const normalized = {}; // with non-string values converted to strings
  Object.keys(submitted).forEach(key => {
    normalized[key] = submitted[key] ? submitted[key].toString() : '';
  });
  const form = getForm(cache);

  const newForm = {
    ...form,
    ...normalized,
    __typename: 'FormData',
  };

  storage.set('form', JSON.stringify(newForm));
  cache.writeData({
    data: {
      form: newForm,
    },
  });
  // it is important to return anything e.g. null (in other case you will see a warning)
  return null;
};

export const getForm = (cache: any) => {
  const { form } = cache.readQuery({
    query: gql`
      {
        form {
          url
          u
          p
          db
          q
        }
      }
    `,
  });
  return {
    url: '',
    u: '',
    p: '',
    db: '',
    q: '',
    ...form,
  };
};
