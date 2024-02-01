import * as axios from 'axios';

export async function getExercise(){
    const exercise = await axios.get(`https://animmo.ir/api/sample_exercise/`);
    return exercise ? exercise.data : null;
} 