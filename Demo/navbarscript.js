function setValue(val){
    document.getElementById("myValue").innerHTML = val
}

function getValue(){

    setValue(10);
}
function erase(){
document.getElementById("myValue").innerHTML = ''

}

// ----------------------------

function setDummyListData(){
    

    const data = [

        {
            id : 'id1',
            name: 'name1'
        },
        {
            id : 'id2',
            name: 'name2'
        },
        {
            id : 'id3',
            name: 'name3'
        }

    ];
    
    let myListData = ''
    for(let i =0 ;i<data.length; i++){
       myListData = myListData + '<l1>' + data[i].name + '</li> <br>' 
    }
    document.querySelector('.navbar #nav-bar-list').innerHTML = myListData;
}

function setServerListData(){

}

function setServerListData(){
    const data = getApiData('http://localhost:8080/');

    
    let myListData = ''
    for(let i =0 ; i<data.length; i++){
       myListData = myListData + '<l1>' + data[i].name + '-'+data[i].mobiles.toString()+ '</li> <br>' 
    }
    document.querySelector('.navbar #nav-bar-list').innerHTML = myListData;
}

function clearListData(){
    document.querySelector('.navbar #nav-bar-list').innerHTML = '';
}

function getApiData(url) {
    const data1 = [
        {
            id : 'id1',
            name: 'Rakesh',
            mobiles : ["73843", "823y824"]
        },
        {
            id : 'id2',
            name: 'Ravi',
            mobiles : ["23473843", "832423y824"]
        },
        {
            id : 'id3',
            name: 'name3',
            mobiles : ["723421343843", "82343223y824"]
        }
    ];

    // const userObject = {
    //     firstName : "Ravi",
    //     secondName : "Joshi",
    //     imgUrl : '',
    // }

    return data;
}
