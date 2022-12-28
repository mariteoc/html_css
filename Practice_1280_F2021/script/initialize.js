let smile1 = [
    [0, 4],[0, 5],[0, 6],[0, 7],
    [1, 2],[1, 3],[1, 8],[1, 9],
    [2, 1],[2, 10],
    [3, 1],[3, 10],
    [4, 0],[4, 4],[4, 7],[4, 11],
    [5, 0],[5, 4],[5, 7],[5, 11],
    [6, 0],[6, 11],
    [7, 0],[7, 3],[7, 8],[7, 11],
    [8, 1],[8, 4],[8, 5],[8, 6],[8, 7],[8, 10],    
    [9, 1],[9, 10],
    [10, 2],[10, 3],[10, 8],[10, 9],    
    [11, 4],[11, 5],[11, 6],[11, 7]
];

let smile2 = [
    [0, 4],[0, 5],[0, 6],[0, 7],
    [1, 2],[1, 3],[1, 8],[1, 9],
    [2, 1],[2, 10],
    [3, 1],[3, 10],
    [4, 0],[4, 3],[4, 4],[4, 6],[4, 7],[4, 11],
    [5, 0],[5, 4],[5, 7],[5, 11],
    [6, 0],[6, 11],
    [7, 0],[7, 8],[7, 11],
    [8, 1],[8, 3],[8, 4],[8, 5],[8, 6],[8, 7],[8, 10],    
    [9, 1],[9, 10],
    [10, 2],[10, 3],[10, 8],[10, 9],    
    [11, 4],[11, 5],[11, 6],[11, 7]
];

//// DO NOT MODIFY THE ABOVE CODE /////

// please write your code below to initialize the container

window.addEventListener('load', function(){
    let cont = document.getElementById('container');
    
    for (let i=0; i<144; i++){
        var div = document.createElement('div');
        div.setAttribute("id","div" + i);
        cont.append(div);
    }
})

