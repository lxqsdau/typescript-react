import * as React from 'react';
import Demo from './demo';
// import './base';
// import './demo2';
// import './var';
// import './interface';
import './function';


// 可选参数必须跟在必须参数后面
// 在所有必须参数后面的带默认初始化的参数都是可选的
function add(x: number, y?: number, z = 4, ...w: number[]): string { 
    console.log(w, 'w');
    return x + y + z + '2';
}
// console.log(add(1, 2, 3, 5, 6));

let myAdd: (baseValue: number, increment: number) => number = (x, y) => { return x + y; };
// console.log(myAdd(2, 4));
function getPositionSuccess(position){  
    var lat = position.coords.latitude;  
    var lng = position.coords.longitude;  
    document.write("所在位置2： 经度(" + lat + ")，纬度(" + lng + ")");  
    if(typeof position.address !== "undefined"){  
        var country = position.address.country;  
        var province = position.address.region;  
        var city = position.address.city;  
        document.write("<br />");  
        document.write("您位于" + country + province + city);  
    }  
}

let xhr = new XMLHttpRequest();
xhr.open('get', 'http://cangdu.org:8001/shopping/v2/menu?restaurant_id=1', true);
xhr.timeout = 1000
xhr.ontimeout = function() {
    console.log('超时')
}
// xhr.setRequestHeader('selfHeader', '123');
let data = new FormData();
data.append('name', 'liu');
data.append('age', '7');
xhr.send();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 3) {
//         // xhr.abort()
//     }
//     if (xhr.readyState === 4) {
//         console.log(xhr.getAllResponseHeaders())
//         console.log(xhr.responseText)
//     }
// }
xhr.onload = function() {
    console.log(xhr.responseText)
}
xhr.onprogress = function(event) {
    if (event.lengthComputable) {
        console.log(event.total)
        console.log(event.loaded)
    }
}
export default class TestImmer extends React.Component<any, any> {
    state = {
        complete: "12ee"
    }
    // 箭头函数能保存函数创建时的this值，而不是调用时的值
    onChange = (name: string): void => {
        console.log(name);
        this.setState({
            complete: 13313,
        });
    }
    render() {
        if(navigator.geolocation){  
            navigator.geolocation.watchPosition(getPositionSuccess)
            // navigator.geolocation.getCurrentPosition(getPositionSuccess);  
        }else{  
            alert("您的浏览器不支持Geolocation!");  
        }  
        return (
            <div>
                {this.state.complete}
                <button onClick={() => { this.onChange('按钮') }}>按77钮</button>
                <Demo a={'1'} b={'3'} />
            </div>
        )
    }
}








