var dia = prompt(`Quin dia de la setmana és avui?`);

switch(dia){
    case `dilluns`:
    result = 1;

    case `dimarts`:
    result = 2;
    break; 

    case `dimecres`:
    result = 3;
    break; 

    case `dijous`:
    result = 4;
    break; 

    case `divendres`:
    result = 5;
    break; 

    case `dissabte`:
    result = 6;
    break; 

    case `diumenge`:
    result = 7;
    break; 
   
    default:
        result = `${dia} no és cap dia de la setmana`;
}
        switch(result){
            case 1:
            resultat = `${dia} és el ${result} dia de la setmana`;
            break; 
        
            case 2:
            resultat = `${dia} és el ${result} dia de la setmana`;
            break; 
        
            case 3:
            resultat = `${dia} és el ${result} dia de la setmana`;
            break; 
        
            case 4:
            resultat = `${dia} és el ${result} dia de la setmana`;
            break; 
        
            case 5:
            resultat = `${dia} és el ${result} dia de la setmana`;
            break; 
        
            case 6:
            resultat = `${dia} és el ${result} dia de la setmana`;
            break; 
        
            case 7:
            resultat = `${dia} és el ${result} dia de la setmana`;
            break; 
           
            default:
                result = `${dia} no és cap dia de la setmana`;
        
        }
        
        alert(`${resultat}`)


/* switch(dia){
    case `dilluns`:
    result = `${dia} és el primer dia de la setmana`;
    break; 

    case `dimarts`:
    result = `${dia} és el segon dia de la setmana`;
    break; 

    case `dimecres`:
    result = `${dia} és el tercer dia de la setmana`;
    break; 

    case `dijous`:
    result = `${dia} és el quart dia de la setmana`;
    break; 

    case `divendres`:
    result = `${dia} és el cinqué dia de la setmana`;
    break; 

    case `dissabte`:
    result = `${dia} és el sisé dia de la setmana`;
    break; 

    case `diumenge`:
    result = `${dia} és el seté dia de la setmana`;
    break; 
   
    default:
        result = `${dia} no és cap dia de la setmana`;

}

alert(`${result}`) */