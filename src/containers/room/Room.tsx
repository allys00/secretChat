import React, { Component } from 'react';
import Classes from './Room.module.css';
import MessagesList from './messagesList/MessagesList';
import Input from '../../components/input/Input';
class Room extends Component {
    render() {
        return (
            <main className={Classes.roomContainer} >
                <section className={Classes.chatContent}>
                    <MessagesList />
                    <Input
                        value={''}
                        className={Classes.inputSendMessage}
                        onChange={({ target }: any) => console.log(target.value)}
                        onEnterRoom={() => console.log('teste')}
                        onKeyPress={console.log}
                        placeholder="Digite sua mensagem"
                    />
                </section>
            </main>
        );
    }
}

export default Room;