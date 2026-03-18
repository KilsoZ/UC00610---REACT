import psicologos from '../data/psicologos.json';

export async function getPsicologos(){
    return new Promise((resolve) =>{
        setTimeout(() => resolve(psicologos), 500);
    });
}

export async function getPsicologoById(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const psicologo = psicologos.find(p => p.id_psicologo === id);
            if(psicologo){
                resolve(psicologo);
            } else {
                reject(new Error(`Psicólogo com id ${id} não encontrado`));
            }
        }, 500);
    })
}