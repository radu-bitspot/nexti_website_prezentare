import React, { useState } from 'react';
import '../styles/Tenis.css';

interface Match {
    team1: string[];
    team2: string[];
    waiting: string[];
}

interface MatchResult {
    winner?: number;
    completed: boolean;
}

interface PlayerStats {
    [key: string]: {
        wins: number;
        losses: number;
    };
}

const Tenis: React.FC = () => {
    const players = {
        advanced: ['Radu', 'Jordan', 'Brez'],
        intermediate: ['Alex', 'Flavia'],
        beginner: ['Bogdan', 'Andreea']
    };

    const [matches, setMatches] = useState<Match[]>([]);
    const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
    const [playerStats, setPlayerStats] = useState<PlayerStats>({});
    const [showBrackets, setShowBrackets] = useState(false);
    const [showStats, setShowStats] = useState(false);

    const [finals, setFinals] = useState<Match[]>([]);
    const [finalsResults, setFinalsResults] = useState<MatchResult[]>([]);
    const [stage, setStage] = useState<'group' | 'finals'>('group');

    const shuffle = (array: string[]): string[] => {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const generateBalancedMatches = (): Match[] => {
        const allPlayers = [...players.advanced, ...players.intermediate, ...players.beginner];
        const shuffled = shuffle(allPlayers);

        const newMatches: Match[] = [];

        // Meci 1: primii 4 jucători
        newMatches.push({
            team1: [shuffled[0], shuffled[1]],
            team2: [shuffled[2], shuffled[3]],
            waiting: [shuffled[4], shuffled[5], shuffled[6]]
        });

        // Meci 2: rotăm jucătorii
        newMatches.push({
            team1: [shuffled[4], shuffled[0]],
            team2: [shuffled[5], shuffled[1]],
            waiting: [shuffled[2], shuffled[3], shuffled[6]]
        });

        // Meci 3: altă rotație
        newMatches.push({
            team1: [shuffled[6], shuffled[2]],
            team2: [shuffled[3], shuffled[4]],
            waiting: [shuffled[0], shuffled[1], shuffled[5]]
        });

        // Meci 4: încă o rotație
        newMatches.push({
            team1: [shuffled[1], shuffled[5]],
            team2: [shuffled[6], shuffled[0]],
            waiting: [shuffled[2], shuffled[3], shuffled[4]]
        });

        return newMatches;
    };

    const generateTournament = () => {
        const newMatches = generateBalancedMatches();
        setMatches(newMatches);
        setMatchResults(newMatches.map(() => ({ completed: false })));
        setFinals([]);
        setFinalsResults([]);
        setStage('group');

        // Inițializare statistici
        const allPlayers = [...players.advanced, ...players.intermediate, ...players.beginner];
        const newStats: PlayerStats = {};
        allPlayers.forEach(player => {
            newStats[player] = { wins: 0, losses: 0 };
        });
        setPlayerStats(newStats);
        setShowBrackets(false);
        setShowStats(false);
    };

    const generateFinals = () => {
        const sorted = Object.entries(playerStats)
            .sort((a, b) => {
                if (b[1].wins !== a[1].wins) return b[1].wins - a[1].wins;
                return a[1].losses - b[1].losses; // Less losses is better
            })
            .map(([name]) => name);

        const newFinals: Match[] = [];

        // Finala Mare (Locurile 1-4)
        // 1 cu 4 vs 2 cu 3 pentru echilibru
        newFinals.push({
            team1: [sorted[0], sorted[3]],
            team2: [sorted[1], sorted[2]],
            waiting: []
        });

        // Finala Mică (Locurile 5-7)
        // 2 vs 1 (Australian)
        newFinals.push({
            team1: [sorted[4], sorted[5]],
            team2: [sorted[6]], // Joacă singur sau primește ajutor
            waiting: []
        });

        setFinals(newFinals);
        setFinalsResults(newFinals.map(() => ({ completed: false })));
        setStage('finals');
    };

    const selectWinner = (matchIndex: number, winningTeam: number, isFinal: boolean = false) => {
        if (isFinal) {
            const newResults = [...finalsResults];
            newResults[matchIndex] = {
                winner: winningTeam,
                completed: true
            };
            setFinalsResults(newResults);

            // Actualizare statistici finale (opțional)
            const match = finals[matchIndex];
            const newStats = { ...playerStats };
            if (winningTeam === 1) {
                match.team1.forEach(p => newStats[p].wins++);
                match.team2.forEach(p => newStats[p].losses++);
            } else {
                match.team2.forEach(p => newStats[p].wins++);
                match.team1.forEach(p => newStats[p].losses++);
            }
            setPlayerStats(newStats);

            if (newResults.every(r => r.completed)) {
                setShowStats(true);
            }
            return;
        }

        const newResults = [...matchResults];
        newResults[matchIndex] = {
            winner: winningTeam,
            completed: true
        };
        setMatchResults(newResults);

        // Actualizare statistici
        const match = matches[matchIndex];
        const newStats = { ...playerStats };
        if (winningTeam === 1) {
            match.team1.forEach(p => newStats[p].wins++);
            match.team2.forEach(p => newStats[p].losses++);
        } else {
            match.team2.forEach(p => newStats[p].wins++);
            match.team1.forEach(p => newStats[p].losses++);
        }
        setPlayerStats(newStats);

        // Verifică dacă toate meciurile din grupă sunt completate
        if (newResults.every(r => r.completed)) {
            setShowStats(true);
        }
    };

    const resetTournament = () => {
        setMatches([]);
        setMatchResults([]);
        setFinals([]);
        setFinalsResults([]);
        setPlayerStats({});
        setShowBrackets(false);
        setShowStats(false);
        setStage('group');
    };

    const sortedPlayers = Object.entries(playerStats)
        .sort((a, b) => b[1].wins - a[1].wins);

    return (
        <div className="tenis-page">
            <div className="tenis-container">
                <h1>🎾 Turneu Tenis</h1>
                <p className="subtitle">Format Dublu - 7 Jucători (4 vs 4 pe teren)</p>

                <div className="players-section">
                    <div className="skill-group">
                        <div className="skill-label">
                            <span className="skill-badge advanced">Avansați</span>
                        </div>
                        <div className="player-list">
                            {players.advanced.map(player => (
                                <span key={player} className="player-tag">{player}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-label">
                            <span className="skill-badge intermediate">Medii</span>
                        </div>
                        <div className="player-list">
                            {players.intermediate.map(player => (
                                <span key={player} className="player-tag">{player}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-group">
                        <div className="skill-label">
                            <span className="skill-badge beginner">Începători</span>
                        </div>
                        <div className="player-list">
                            {players.beginner.map(player => (
                                <span key={player} className="player-tag">{player}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="btn-group">
                    <button className="btn btn-primary" onClick={generateTournament}>
                        🎯 Generează Turneu
                    </button>
                    <button className="btn btn-secondary" onClick={resetTournament}>
                        🔄 Reset
                    </button>
                </div>

                {matches.length > 0 && stage === 'group' && (
                    <div id="matchesSection">
                        <h2 style={{ textAlign: 'center', color: '#667eea', marginBottom: '20px' }}>
                            Meciuri Grupă
                        </h2>
                        <div className="matches-container">
                            {matches.map((match, index) => (
                                <div key={index} className="match-card">
                                    <div className="match-header">Meci {index + 1}</div>

                                    <div className="team">
                                        <div className="team-label">Echipa 1</div>
                                        <div className="team-players">
                                            {match.team1.map(p => (
                                                <div key={p} className="player-name">{p}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="team">
                                        <div className="team-label">Echipa 2</div>
                                        <div className="team-players">
                                            {match.team2.map(p => (
                                                <div key={p} className="player-name">{p}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="waiting-players">
                                        <div className="waiting-label">⏳ Așteaptă:</div>
                                        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                                            {match.waiting.map(p => (
                                                <span key={p} style={{
                                                    background: 'white',
                                                    padding: '5px 10px',
                                                    borderRadius: '15px',
                                                    fontSize: '0.9em'
                                                }}>
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {!matchResults[index]?.completed && (
                                        <div className="score-input">
                                            <button
                                                onClick={() => selectWinner(index, 1)}
                                                style={{ flex: 1, background: '#28a745' }}
                                            >
                                                Echipa 1 Câștigă
                                            </button>
                                            <button
                                                onClick={() => selectWinner(index, 2)}
                                                style={{ flex: 1, background: '#dc3545' }}
                                            >
                                                Echipa 2 Câștigă
                                            </button>
                                        </div>
                                    )}
                                    {matchResults[index]?.completed && (
                                        <div className="score-input">
                                            <div style={{
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                color: '#28a745',
                                                fontSize: '1.1em'
                                            }}>
                                                ✓ Câștigător: Echipa {matchResults[index].winner}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {matchResults.every(r => r.completed) && (
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <button
                                    className="btn btn-primary"
                                    onClick={generateFinals}
                                    style={{ background: '#ffc107', color: '#000' }}
                                >
                                    � Generează Finale
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {stage === 'finals' && (
                    <div id="finalsSection">
                        <h2 style={{ textAlign: 'center', color: '#667eea', marginBottom: '20px' }}>
                            Finale
                        </h2>
                        <div className="matches-container">
                            {finals.map((match, index) => (
                                <div key={index} className="match-card" style={{
                                    border: index === 0 ? '3px solid #ffd700' : '3px solid #c0c0c0',
                                    background: index === 0 ? '#fff9db' : '#f8f9fa'
                                }}>
                                    <div className="match-header">
                                        {index === 0 ? '🏆 Finala Mare (Locurile 1-4)' : '🥈 Finala Mică (Locurile 5-7)'}
                                    </div>

                                    <div className="team">
                                        <div className="team-label">Echipa 1</div>
                                        <div className="team-players">
                                            {match.team1.map(p => (
                                                <div key={p} className="player-name">{p}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="team">
                                        <div className="team-label">Echipa 2</div>
                                        <div className="team-players">
                                            {match.team2.map(p => (
                                                <div key={p} className="player-name">{p}</div>
                                            ))}
                                        </div>
                                    </div>

                                    {index === 1 && (
                                        <div style={{ textAlign: 'center', fontSize: '0.9em', color: '#666', margin: '10px 0' }}>
                                            * Format 2 vs 1 (Australian)
                                        </div>
                                    )}

                                    {!finalsResults[index]?.completed && (
                                        <div className="score-input">
                                            <button
                                                onClick={() => selectWinner(index, 1, true)}
                                                style={{ flex: 1, background: '#28a745' }}
                                            >
                                                Echipa 1 Câștigă
                                            </button>
                                            <button
                                                onClick={() => selectWinner(index, 2, true)}
                                                style={{ flex: 1, background: '#dc3545' }}
                                            >
                                                Echipa 2 Câștigă
                                            </button>
                                        </div>
                                    )}
                                    {finalsResults[index]?.completed && (
                                        <div className="score-input">
                                            <div style={{
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                color: '#28a745',
                                                fontSize: '1.1em'
                                            }}>
                                                ✓ Câștigător: Echipa {finalsResults[index].winner}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {showBrackets && (
                    <div id="bracketSection">
                        <div className="bracket-section">
                            <div className="bracket-title">🏆 Bracket Câștigători</div>
                            <div className="bracket-container">
                                {matches.map((match, index) => {
                                    const result = matchResults[index];
                                    const winner = result.winner === 1 ? 'team1' : 'team2';

                                    return (
                                        <div key={index} className="bracket-match winner">
                                            <div className="round-label">Meci {index + 1}</div>
                                            <div className={`bracket-team ${winner === 'team1' ? 'won' : 'lost'}`}>
                                                <span>{match.team1.join(' & ')}</span>
                                                <span>{winner === 'team1' ? '✓' : '✗'}</span>
                                            </div>
                                            <div className={`bracket-team ${winner === 'team2' ? 'won' : 'lost'}`}>
                                                <span>{match.team2.join(' & ')}</span>
                                                <span>{winner === 'team2' ? '✓' : '✗'}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bracket-section">
                            <div className="bracket-title">📉 Bracket Învinși</div>
                            <div className="bracket-container">
                                {matches.map((match, index) => {
                                    const result = matchResults[index];
                                    const winner = result.winner === 1 ? 'team1' : 'team2';

                                    return (
                                        <div key={index} className="bracket-match loser">
                                            <div className="round-label">Meci {index + 1}</div>
                                            <div className={`bracket-team ${winner === 'team1' ? 'won' : 'lost'}`}>
                                                <span>{match.team1.join(' & ')}</span>
                                                <span>{winner === 'team1' ? '✓' : '✗'}</span>
                                            </div>
                                            <div className={`bracket-team ${winner === 'team2' ? 'won' : 'lost'}`}>
                                                <span>{match.team2.join(' & ')}</span>
                                                <span>{winner === 'team2' ? '✓' : '✗'}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {showStats && (
                    <div id="statsSection">
                        <div className="stats-section">
                            <div className="stats-title">📊 Statistici Turneu</div>
                            <div className="stats-grid">
                                {sortedPlayers.map(([player, stats]) => (
                                    <div key={player} className="stat-card">
                                        <div className="stat-value">{stats.wins}-{stats.losses}</div>
                                        <div className="stat-label">{player}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tenis;
