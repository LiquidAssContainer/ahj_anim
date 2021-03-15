import HometaskSwitch from './HometaskSwitch';
import CollapseButton from './CollapseButton';
import CallbackChat from './CallbackChat';
import Liker from './Liker';

const hometaskSwitch = new HometaskSwitch();
hometaskSwitch.switchTaskManually('1');

const collapseBtn = new CollapseButton();
const chat = new CallbackChat();
const liker = new Liker();
