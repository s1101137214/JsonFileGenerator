import { action, computed, observable, toJS } from 'mobx';
import qs from 'qs';
import BaseState from './base.state';
import axios from 'axios';
export default class HomeState extends BaseState {

    //  @observable targetURL: string = "https://opendata.epa.gov.tw/ws/Data/ATM00698/?$format=json"; //test
    @observable msg: string = "please press button";
    constructor() {
        super();
    }

    private getJsonFile = () => {
        axios({
            method: 'post',
            url: '/start',
            // data: {
            //     tu: this.targetURL
            // },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

        }).then((res) => { this.msg = res.data.toString(); })
            .catch((err) => { this.msg = err.toString(); });
    }

    @action.bound
    handleClick() {
        this.msg = "in progress..."
        this.getJsonFile();
    }
}