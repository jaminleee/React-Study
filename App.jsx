import {
    EachPostLi,
    Footer,
    FooterBig,
    FooterSmall,
    Header,
    LoadingDiv,
    LoadingImg,
    Main,
    MediaDiv,
    PagenumberDiv,
    PagingSection,
    PostLink,
    PostListDiv,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
    SlogunBig,
    SlogunSection,
    SlogunSmall,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
} from './styledComponent';

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
    faSun,
    faMoon,
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSimplybuilt } from '@fortawesome/free-brands-svg-icons';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import {ThemeProvider} from 'styled-components';
import loadingIcon from './loading.svg';

function App() {
    const darkMode = false;
    const loading = false;
    const isPost = true;
    return( 
    <>
    <ThemeProvider theme = { darkMode ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <MediaDiv>
            <Header>
                <TitleLogoDiv>
                    <TitleBig>멋사</TitleBig>
                    <TitleSmall>익명 게시판</TitleSmall>
                </TitleLogoDiv>
                <SubHeaderDiv>
                    {darkMode? ( 
                    <div>
                        <FontAwesomeIcon icon={faMoon}/>
                    </div>
                    ) : (
                    <div>
                        <FontAwesomeIcon icon={faSun}/>
                    </div>
                    )}
                    </SubHeaderDiv>
            </Header>
            <Main>
                <SlogunSection>
                <SlogunBig>HACK YOUR LIFE</SlogunBig>
                <SlogunSmall>
                    내 아이디어를 내 손으로 실현한다
                    </SlogunSmall>
                </SlogunSection>
                <PostSection>
                    <PostTitleDiv>
                        <FontAwesomeIcon icon={faArrowsRotate}/>
                        <PostTitle>익명 게시판</PostTitle>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    </PostTitleDiv>
                    {loading ? (
                        <LoadingDiv>
                            <LoadingImg src = {loadingIcon} />
                        </LoadingDiv>
                    ) : 
                        isPost ? (
                        <LoadingDiv>no</LoadingDiv>
                        ) : (
                        <ul>
                        <EachPostLi>
                                    <div>
                                        <FontAwesomeIcon icon = {faLocationPin}/>
                                        <PostLink>
                                            faLocationPin 아이콘 입니다
                                        </PostLink>
                                    </div>
                                <PostRepl>[35]</PostRepl>
                            </EachPostLi>
                         </ul>
                        )}
                        
                    <PostListDiv>
                        
                    </PostListDiv>
                </PostSection>
                <PagingSection>
                    <PagenumberDiv>
                        <FontAwesomeIcon icon = {faArrowLeft}/>
                        </PagenumberDiv>
                    <PagenumberDiv>2</PagenumberDiv>
                    <PagenumberDiv>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </PagenumberDiv>
                </PagingSection>
            </Main>
            <Footer>
                <FontAwesomeIcon icon={faReact}/>
                <FooterBig>for react study</FooterBig>
                <FooterSmall>jamin</FooterSmall>
            </Footer>
        </MediaDiv>
        </ThemeProvider>
    </>
    );
}

export default App;
