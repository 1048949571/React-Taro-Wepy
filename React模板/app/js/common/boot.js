import {LoadingModal} from '../../widget/components/LoadingModal/LoadingModal';

import {message} from 'antd';
window.LoadingModal = LoadingModal;

if(location.href.indexOf('index.html')>-1){
    window.can = {};
    $.ajax({
        url: '/hcm/sys/getTree',
        method: 'GET',
        async:false,
        success: function (rep) {
            for(let i = 0 ; i<rep.data.length; i++){
                window.can[rep.data[i].dictCode] = rep.data[i].children
            }
        },
        error: function (err) {
            message.error(err.statusText)
        },
    });
}


