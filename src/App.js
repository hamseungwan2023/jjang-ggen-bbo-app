import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [win, setWin] = useState(0);
    const [champion, setChampion] = useState(null);
    const [result, setResult] = useState('');
    const [winner, setWinner] = useState(false);

    useEffect(() => {
        if (win == 3) {
            setWinner(true);
        }
    }, [win]);

    const playGame = (playerChoice) => {
        const computerChoice = Math.floor(Math.random() * 3); // 0: 가위, 1: 바위, 2: 보
        setChampion(computerChoice);

        if (playerChoice === computerChoice) {
            setResult('비겼습니다!');
        } else if (
            (playerChoice === 0 && computerChoice === 2) || // 가위 > 보
            (playerChoice === 1 && computerChoice === 0) || // 바위 > 가위
            (playerChoice === 2 && computerChoice === 1) // 보 > 바위
        ) {
            setResult('이겼습니다!');
            setWin(win + 1);
        } else {
            setResult('졌습니다!');
            setWin(win - 1);
        }
    };

    return (
        <div className="App">
            <h1>가위바위보 게임</h1>
            <h1>함승완의 선택: {champion !== null ? ['가위', '바위', '보'][champion] : '선택 안됨'}</h1>
            <button className="btn" onClick={() => playGame(0)}>
                가위
            </button>
            <button className="btn" onClick={() => playGame(1)}>
                바위
            </button>
            <button className="btn" onClick={() => playGame(2)}>
                보
            </button>
            <h2>{result}</h2>
            <h2>승리 횟수: {win}</h2>
            {winner == false ? <></> : <h1>캡쳐 후 디엠주세요</h1>}
        </div>
    );
}

export default App;
