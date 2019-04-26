import { Spin, Icon } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 60,color: '#c2a76d' }} spin />;
const styles ={
    box:{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        paddingBottom:'10%'
    }
}
function Loading(props){
        return(
            <div style={styles.box}>
                <Spin indicator={antIcon} />
            </div>
        )
}

export default Loading