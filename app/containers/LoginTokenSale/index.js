// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginTokenSale from './LoginTokenSale'
import { loginWithPrivateKey } from '../../modules/account'

const mapStateToProps = (state: Object) => ({
  wif: state.account.wif
})

const actionCreators = {
  loginWithPrivateKey
}

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginTokenSale)
