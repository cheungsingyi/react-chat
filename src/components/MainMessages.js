/**
* 聊天室消息列表
**/


import React from 'react';


export default class MainMessages extends React.PureComponent {
    componentDidUpdate() {
        this._messages.scrollTop = this._messages.scrollHeight;
    }

    render() {
        const { user, msg } = this.props;
        const { username, avatar } = user;

        // 根据消息类型不同 生成消息列表
        const msgItems = msg.map((msgItem, index) => {
            if (msgItem.type === 'system') {
                return (
                    <div key={index} className="message-system">
                        <span>{msgItem.text}</span>
                    </div>
                );
            }
            if (msgItem.sender === username) {
                return (
                    <div key={index} className="message-container message-self">
                        <div className="message-sender">
                            <img
                              src={`http://7xnpxz.com1.z0.glb.clouddn.com/${avatar}.png`}
                              alt="头像"
                            />
                        </div>
                        <div className="message-content">
                            <div>{username}<span className="message-time">{msgItem.time}</span></div>
                            <div className="message-text">{msgItem.text}</div>
                        </div>
                    </div>
                );
            }
            return (
                <div key={index} className="message-container">
                    <div className="message-sender">
                        <img
                          src={`http://7xnpxz.com1.z0.glb.clouddn.com/${msgItem.avatar}.png`}
                          alt="头像"
                        />
                    </div>
                    <div className="message-content message-other">
                        <div>{msgItem.sender}<span className="message-time">{msgItem.time}</span></div>
                        <div className="message-text">{msgItem.text}</div>
                    </div>
                </div>
            );
        });

        return (
            <div
              className="main-messages"
              ref={ div => this._messages = div }
            >
                {msgItems}
            </div>
        );
    }
}
