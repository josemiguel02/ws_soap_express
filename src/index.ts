import app from './app';

async function init() {
  try {
    const PORT = app.get('PORT');

    app.listen(PORT, () => {
      console.log(`Server listen on: http://localhost:${PORT}`);
    });

  } catch (error) {
    console.log('Somethin went wrong!');
  }
}

init();
