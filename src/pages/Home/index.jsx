import React, {Component} from "react"
import { connect } from "react-redux";

import * as Style from './styles';

import Header from '../../components/layout/header/Header';
import {getPostData as getPostDataAction} from '../../actions';
import PostItem from './view/PostItem';

class Home extends Component {
  componentDidMount() {
    this.props.getPostData()
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
                    <PostItem post={data} key={data.id}/>
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

const mapStateToProps = state => ({
  postData: state.postData
});

const mapDispatchToProps = (dispatch)  => ({
  getPostData: () =>
    dispatch(getPostDataAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
