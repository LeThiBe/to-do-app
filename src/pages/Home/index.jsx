import React, {Component} from "react"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as Style from './styles';

import Header from '../../components/layout/header/Header';
import {getPostData as getPostDataAction } from '../../actions';
import {postData} from "../../api"
import {GET_DATA} from '../../constants/actionTypes';

class Home extends Component {
  componentDidMount() {
    this.props.getPostData(postData)
  }

  render() {
    const {postData} = this.props


    return (
      <>
        <Header />
        <Style.MainContainer>
          <Style.TitleContent>This is home page</Style.TitleContent>
          <div>
            <Style.TableContent>
              <Style.Theadtable>
                <Style.Rowtable>
                  <Style.TitleField scope="col">id</Style.TitleField>
                  <Style.TitleField scope="col">title</Style.TitleField>
                  <Style.TitleField scope="col">body</Style.TitleField>
                </Style.Rowtable>
              </Style.Theadtable>
              <Style.Tbodytable>
                {
                  postData && postData.map(data => (
                    <Style.Rowtable key={data.id}>
                      <Style.ContentField>{data.id}</Style.ContentField>
                      <Style.ContentField>{data.title}</Style.ContentField>
                      <Style.ContentField>{data.body}</Style.ContentField>
                    </Style.Rowtable>
                  ))
                }
              </Style.Tbodytable>
            </Style.TableContent>
          </div>
        </Style.MainContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    postData: state.postData
  };
};


const mapDispatchToProps = (dispatch)  => {
  return {
    getPostData: (params) =>
      dispatch(getPostDataAction(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
