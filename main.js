document.addEventListener('DOMContentLoaded', function() {
    //                  VARIABLES DE PUNTAJES
    let player1Score = 0;
    let player2Score = 0;
    let maxScore = 3; 

    //                      DIV PRINCIPAL
    const container = document.createElement('div');
    container.id = 'principalContainer'

    const h1 = document.createElement('h1');
    h1.textContent = 'Marcador de Ping Pong';
    container.appendChild(h1);

    const scoreContainer = document.createElement('div');
    const player1ScoreElement = document.createElement('span');
    player1ScoreElement.id = 'player1-score';
    player1ScoreElement.className = 'score';
    player1ScoreElement.textContent = '0';
    scoreContainer.appendChild(player1ScoreElement);

    const dash = document.createElement('span');
    dash.textContent = ' - ';
    scoreContainer.appendChild(dash);
    dash.id ='separator'

    const player2ScoreElement = document.createElement('span');
    player2ScoreElement.id = 'player2-score';
    player2ScoreElement.className = 'score';
    player2ScoreElement.textContent = '0';
    scoreContainer.appendChild(player2ScoreElement);

    container.appendChild(scoreContainer);

    //                  BOTONES PARA SUMAR PUNTOS
    const buttonContainer = document.createElement('div');

    const player1Button = document.createElement('button');
    player1Button.id = 'player1-btn';
    player1Button.textContent = 'Jugador 1 +1';
    buttonContainer.appendChild(player1Button);

    const player2Button = document.createElement('button');
    player2Button.id = 'player2-btn';
    player2Button.textContent = 'Jugador 2 +1';
    buttonContainer.appendChild(player2Button);

    container.appendChild(buttonContainer);

    //                      SELECT DE MAXIMO PUNTAJE
    const selectContainer = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = 'Puntos Máximos:';
    label.setAttribute('for', 'max-score');
    selectContainer.appendChild(label);

    const select = document.createElement('select');
    select.id = 'max-score';

    const options = [3, 5, 7, 10, 15];
    options.forEach(optionValue => {
        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
    });

    selectContainer.appendChild(select);
    container.appendChild(selectContainer);

    //                              REINICIO
    const resetButton = document.createElement('button');
    resetButton.id = 'reset-btn';
    resetButton.textContent = 'Reiniciar';
    container.appendChild(resetButton);

    document.body.appendChild(container);

    function updateScores() {
        player1ScoreElement.textContent = player1Score;
        player2ScoreElement.textContent = player2Score;

//                                CONDICIONALES DE VICTORIAS 
        if (player1Score >= maxScore || player2Score >= maxScore) {
            alert('¡Juego terminado!');
        }
    }

//                                          ESCUCHANTES
    player1Button.addEventListener('click', function() {
        player1Score++;
        updateScores();
    });

    player2Button.addEventListener('click', function() {
        player2Score++;
        updateScores();
    });

    resetButton.addEventListener('click', function() {
        player1Score = 0;
        player2Score = 0;
        updateScores();
    });

//                     REINICIAR LOS MARCADORES SI SE CAMBIA EL PUNTAJE MAXIMO


    select.addEventListener('change', function() {

        maxScore = parseInt(select.value);
        player1Score = 0;
        player2Score = 0;
        updateScores();
    });

    updateScores();
});


