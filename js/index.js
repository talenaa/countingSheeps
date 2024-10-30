
function countSheeps(list){
    let lengthList = list.length;
    let sheeps = 0;

    for (let index=0;index<lengthList;index++){
        if (true==list[index]){
            sheeps++;
        };
    }

    if(sheeps > 0){
        return("There are "+sheeps+" sheep in total");
    };

    if(sheeps == 0){
        return("UPS!!! Wolfs eaten Sheeps");
    };

}

let list = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
let result = countSheeps(list);
console.log(result);

list = [ false, false, false ];
result = countSheeps(list);
console.log(result);




