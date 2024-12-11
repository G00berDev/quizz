import React, { useState, useEffect } from "react";
import './App.css'; // Import the CSS file
import logo from './logo.svg';


const QuizApp = () => {
const [questions, setQuestions] = useState([]);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [score, setScore] = useState(0);
const [feedback, setFeedback] = useState(null);

useEffect(() => {
const quizQuestions = [
    {
        question: "What is the name of the first boss encountered in Dark Souls?",
        options: ["Taurus Demon", "Asylum Demon", "Bell Gargoyle", "Ceaseless Discharge"],
        correctAnswer: "Asylum Demon",
    },
    {
        question: "What is the main currency used to level up and buy items?",
        options: ["Souls", "Blood Echoes", "Runes", "Cinders"],
        correctAnswer: "Souls",
    },
    {
        question: "Who is the final boss in Dark Souls?",
        options: ["Gwyn, Lord of Cinder", "Artorias", "Manus", "Seath the Scaleless"],
        correctAnswer: "Gwyn, Lord of Cinder",
    },
    {
        question: "What is the name of the blacksmith found in Undead Parish?",
        options: ["Andre", "Rickert", "Vamos", "Lenigrast"],
        correctAnswer: "Andre",
    },
    {
        question: "Which item is required to kindle a bonfire beyond its initial level?",
        options: ["Humanity", "Fire Keeper Soul", "Estus Shard", "Soul of a Hero"],
        correctAnswer: "Humanity",
    },
    {
        question: "What ring allows you to traverse the Abyss?",
        options: ["Covenant of Artorias", "Darkmoon Seance Ring", "Orange Charred Ring", "Havel's Ring"],
        correctAnswer: "Covenant of Artorias",
    },
    {
        question: "What is the name of the area with invisible walkways?",
        options: ["Crystal Cave", "Anor Londo", "Blighttown", "Darkroot Garden"],
        correctAnswer: "Crystal Cave",
    },
    {
        question: "Who is the leader of the Warriors of Sunlight covenant?",
        options: ["Solaire of Astora", "Gwyndolin", "Gwyn", "The Nameless King"],
        correctAnswer: "Solaire of Astora",
    },
    {
        question: "Which NPC can cure curses in Dark Souls?",
        options: ["Oswald of Carim", "Ingward", "Laurentius", "Gwynevere"],
        correctAnswer: "Ingward",
    },
    {
        question: "What does the Cat Covenant Ring do?",
        options: [
        "Summons you to defend the forest",
        "Boosts sorcery damage",
        "Grants fall damage immunity",
        "Increases dexterity",
        ],
        correctAnswer: "Summons you to defend the forest",
    },
    {
        question: "Who betrayed Gwyn and became the 'father of the abyss'?",
        options: ["Artorias", "Manus", "Seath the Scaleless", "Havel"],
        correctAnswer: "Seath the Scaleless",
    },
    {
        question: "What is the name of the ancient dragon found in Ash Lake?",
        options: ["Kalameet", "Seath", "Everlasting Dragon", "Ancient Wyvern"],
        correctAnswer: "Everlasting Dragon",
    },
    {
        question: "Which NPC is known for saying, 'Well, what is it?'",
        options: ["Siegmeyer of Catarina", "Oswald of Carim", "Solaire of Astora", "Patches"],
        correctAnswer: "Oswald of Carim",
    },
    {
        question: "Which boss guards the city of Anor Londo?",
        options: ["Ornstein and Smough", "Four Kings", "Iron Golem", "Gargoyles"],
        correctAnswer: "Ornstein and Smough",
    },
    {
        question: "What is the name of the primordial serpent in Firelink Shrine?",
        options: ["Kaathe", "Frampt", "Aldia", "Nashandra"],
        correctAnswer: "Frampt",
    },
    {
        question: "What stat increases equipment load capacity?",
        options: ["Strength", "Dexterity", "Endurance", "Vitality"],
        correctAnswer: "Endurance",
    },
    {
        question: "Which boss is found in the Painted World of Ariamis?",
        options: ["Priscilla", "Crossbreed Priscilla", "Velka", "Gwyndolin"],
        correctAnswer: "Crossbreed Priscilla",
    },
    {
        question: "What is the name of the toxic swamp area?",
        options: ["Blighttown", "Darkroot Basin", "New Londo", "Valley of Drakes"],
        correctAnswer: "Blighttown",
    },
    {
        question: "What type of weapon is most effective against skeletons?",
        options: ["Blunt", "Slash", "Pierce", "Magic"],
        correctAnswer: "Blunt",
    },
    {
        question: "Who is the giant blacksmith in Anor Londo?",
        options: ["Gough", "Andre", "Hawkeye", "Giant Blacksmith"],
        correctAnswer: "Giant Blacksmith",
    },
    {
        question: "What does the Dried Finger item do?",
        options: [
        "Resets invasion cooldown",
        "Increases Estus recovery",
        "Allows summoning of multiple phantoms",
        "Boosts curse resistance",
        ],
        correctAnswer: "Allows summoning of multiple phantoms",
    },
    {
        question: "Which area contains the Four Kings?",
        options: ["New Londo Ruins", "Anor Londo", "Undead Parish", "Darkroot Garden"],
        correctAnswer: "New Londo Ruins",
    },
    {
        question: "What does the Ring of Fog do?",
        options: [
        "Makes you invisible to enemies",
        "Allows you to traverse fog walls",
        "Boosts magic power",
        "Prevents stamina loss while blocking",
        ],
        correctAnswer: "Makes you invisible to enemies",
    },
    {
        question: "What NPC provides miracles to the player?",
        options: ["Reah of Thorolund", "Griggs", "Big Hat Logan", "Dusk of Oolacile"],
        correctAnswer: "Reah of Thorolund",
    },
    {
        question: "What does the item 'Green Blossom' do?",
        options: ["Boosts stamina recovery", "Heals HP", "Restores mana", "Removes poison"],
        correctAnswer: "Boosts stamina recovery",
    },
    {
        question: "What is the name of the knight known for his onion-shaped armor?",
        options: ["Siegmeyer of Catarina", "Black Iron Tarkus", "Knight Lautrec", "Havel the Rock"],
        correctAnswer: "Siegmeyer of Catarina",
    },
    {
        question: "What does the Orange Charred Ring protect against?",
        options: ["Fire damage", "Fall damage", "Dark damage", "Poison"],
        correctAnswer: "Fire damage",
    },
    {
        question: "Which boss is found in the Great Hollow?",
        options: ["Hydra", "Ancient Dragon", "None", "Seath the Scaleless"],
        correctAnswer: "None",
    },
    {
        question: "Who is the leader of the Darkwraith covenant?",
        options: ["Kaathe", "Frampt", "Abyss Walker", "Manus"],
        correctAnswer: "Kaathe",
    },
    {
        question: "What is the name of the shield that grants stamina recovery?",
        options: ["Grass Crest Shield", "Dragon Crest Shield", "Crest Shield", "Eagle Shield"],
        correctAnswer: "Grass Crest Shield",
    },
    ];
    
setQuestions(quizQuestions);
}, []);

const handleAnswerSelection = (answer) => {
setSelectedAnswer(answer);
const correctAnswer = questions[currentQuestionIndex].correctAnswer;
if (answer === correctAnswer) {
setFeedback("Correct!");
setScore((prev) => prev + 1);
} else {
setFeedback(`Incorrect. The correct answer is ${correctAnswer}.`);
}
};

const handleNextQuestion = () => {
setSelectedAnswer(null);
setFeedback(null);
setCurrentQuestionIndex((prev) => prev + 1);
};

return (
<div className="container">
<h1 className="quiz-title">Dark Souls Quiz</h1>
{currentQuestionIndex < questions.length ? (
<>
    <div className="question-card">
    <h2>Question {currentQuestionIndex + 1}</h2>
    <p>{questions[currentQuestionIndex].question}</p>
    {questions[currentQuestionIndex].options.map((option, index) => (
        <button
        key={index}
        className={`button ${selectedAnswer ? "disabled" : ""}`}
        onClick={() => handleAnswerSelection(option)}
        disabled={selectedAnswer !== null}
        >
        {option}
        </button>
    ))}
    {feedback && <p>{feedback}</p>}
    </div>
    <button
    className="button primary"
    onClick={handleNextQuestion}
    disabled={!feedback}
    >
    Next Question
    </button>
</>
) : (
<h2>Your total score: {score}/{questions.length}</h2>
)}
</div>
);
};

export default QuizApp;
