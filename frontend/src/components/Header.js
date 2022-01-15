import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'

import { PageHeader } from 'antd';
import {NAVIGATION_ONE} from "../utils/consts";


const Header = observer(() => {

    const {device} = useContext(Context)
    const history = useHistory()

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => history.push(NAVIGATION_ONE)}
            title="ServiceRobot"
            subTitle="Create project prototype"
        />
    );

})

export default Header;
