import * as React from 'react';
// 接口
interface IProps {
    a: string; // 必传属性
    b?: string; // 可选属性
}
export default class Demo extends React.Component<IProps, any> {
    render() {
        return (
            <div>{this.props.a}{this.props.b}</div>
        )
    }
}