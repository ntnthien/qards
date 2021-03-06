import styled from "styled-components";
import {Box, Flex} from "grid-styled";
import {Link} from "gatsby";
import theme from "../../theme";
import tinycolor from "tinycolor2";

export const Wrapper = styled.div`
    &.darktheme {
        h3 {
            font-weight: 200;
            color: ${theme.colors.bgPrimaryText};
        }
        
        .post-card {
            border: none;
            border-radius: 0!important;
            
            -webkit-box-shadow: 0 5px 15px 0 ${tinycolor(theme.colors.primary).darken(20).toString()} !important;
            -moz-box-shadow: 0 5px 15px 0 ${tinycolor(theme.colors.primary).darken(20).toString()} !important;
            box-shadow: 0 5px 15px 0 ${tinycolor(theme.colors.primary).darken(20).toString()} !important;
        
            &:hover {
                text-decoration: inherit!important;
                transform: scale(1.001);
                
                -webkit-box-shadow: 0 10px 22px 0 ${tinycolor(theme.colors.primary).darken(20).toString()} !important;
                -moz-box-shadow: 0 10px 22px 0 ${tinycolor(theme.colors.primary).darken(20).toString()} !important;
                box-shadow: 0 10px 22px 0 ${tinycolor(theme.colors.primary).darken(20).toString()} !important;
            }
            
            .post-card-cover {
                img {
                    border-radius: 0!important;
                }
            }
        }
    }
    
    h3 {
        text-align: center;
        margin-bottom: 50px;
        font-size: 1.8rem;
        color: ${theme.colors.primary};
    }
`;

export const StyledCard = styled(Link)`
    width: 100%;
	padding: 0 0 50px 0 !important;
	margin-bottom: 40px;
	border-radius: 4px !important;
	position: relative;
	border: 1px solid ${tinycolor(theme.colors.faded).darken(20).toString()};

	-webkit-box-shadow: 0 5px 15px 0 ${theme.colors.faded};
	-moz-box-shadow: 0 5px 15px 0 ${theme.colors.faded};
	box-shadow: 0 5px 15px 0 ${theme.colors.faded};

	&:hover {
	    text-decoration: inherit!important;
	    -webkit-transform: translate3d(0, -2px, 0);
        -moz-transform: translate3d(0, -2px, 0);
        -o-transform: translate3d(0, -2px, 0);
        -ms-transform: translate3d(0, -2px, 0);
        transform: translate3d(0, -2px, 0);
        
        -webkit-box-shadow: 0 5px 15px 0 ${tinycolor(theme.colors.faded).darken(10).toString()};
        -moz-box-shadow: 0 5px 15px 0 ${tinycolor(theme.colors.faded).darken(10).toString()};
        box-shadow: 0 5px 15px 0 ${tinycolor(theme.colors.faded).darken(10).toString()};
	}
`;

export const Article = styled.article`
	height: 100%;
	display: flex;
	margin-top: 20px;
	background: white;
`;

export const Cover = styled.div`
	img {
	    border-top-right-radius: 4px;
	    border-top-left-radius: 4px;
	}
`;

export const List = styled(Flex)`
	list-style-type: none;
	margin: 0;
	padding: 0;

	display: flex;
	flex-wrap: wrap;
`;

export const ListItem = styled(Box)`
	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	padding: 30px;

	h5.title {
		font-weight: 500;
		margin: 10px 0 25px 0;
		font-size: 1.3rem;
	}

	p.excerpt {
		font-size: 1rem;
		line-height: 1.3;
		font-weight: 300;
		color: ${tinycolor(theme.colors.lightText).darken(20).toString()};
	}

	span.date {
		font-size: 0.8rem;
		font-weight: 400;
		color: rgb(143, 166, 178);
		text-transform: uppercase;
	}
`;

export const Author = styled.div`
	position: absolute;
	bottom: 20px;
	padding: 0 30px 0 30px;

	&::after {
		content: '';
		display: table;
		table-layout: fixed;
	}
	&::before {
		content: '';
		display: table;
		table-layout: fixed;
	}
`;

export const AuthorContent = styled.div`
	padding: 0 30px 0px 30px;

	.name {
		font-weight: 500;
		font-size: 13px;
		line-height: 25px;
		white-space: nowrap;
	}

	.info {
		line-height: 1.85;
		font-size: 13px;
		white-space: nowrap;
	}
`;

export const Gravatar = styled.div`
	margin-top: 5px;
	margin-right: 15px;
	background: #f7f7ff;
	border-radius: 20px;
	height: 40px;
	width: 40px;
	float: left;

	img {
		border-radius: 40px;
	}
`;