import React, { useEffect, useState } from 'react'
import NetworkCellIcon from '@material-ui/icons/NetworkCell';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import CameraIcon from '@material-ui/icons/Camera';
const Notification = () => {
    const [time, setTime] = useState();
    useEffect(() => {
        setInterval(() => {
            getTime();
        }, 30000);
    }, []);

    const getTime = () => {
        const d = new Date();
        let t = d.getHours();
        let m = d.getMinutes();
        let fullTime = `${t}:${m}`
        setTime(fullTime)
    }

    return (
        <header className="notification_bar">
            <section className="left">
                <div className="camera"><CameraIcon /></div>
                <div className="time">{time}</div>
            </section>
            <section className="right">
                <NetworkCellIcon className="icon" />
                <NetworkWifiIcon className="icon" />
                <BatteryCharging90Icon className="icon" />
            </section>

        </header>
    )
}

export default Notification
