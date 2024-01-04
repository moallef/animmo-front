import * as axios from 'axios';

export async function getExercise(){
    const exercise = await axios.get(`http://127.0.0.1:8000/sample_exercise/`);
    return exercise ? exercise.data : null;
} 