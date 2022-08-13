export const sendData = (url, onSuccess, onError, body) => {

  fetch(url,

    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {

      if (response.ok) {

        onSuccess();

      } else {

        onError(FORM_ERROR_MESSAGE);

      }
    })

    .catch(() => {

      onError(FORM_ERROR_MESSAGE);
    });
};
