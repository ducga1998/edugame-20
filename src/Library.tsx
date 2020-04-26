import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button} from "./EditVideo/Inspector";
import {Subscribe} from "unstated-x";
import {dataContainer} from "./container/baseContainer";
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Library() {
    const classes = useStyles();

    return (
        <Subscribe to={[dataContainer]}>
            {
                container => {
                    return    <div style={{ padding: '80px 80px' , display : 'flex'  }}>
                        <Card className={classes.root} style={{ marginRight : '20px'}} onClick={() => {

                        }}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="img.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Bài tập phân biệt a an
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Giải thích: a, an đứng trước danh từ số ít, đếm được, an đứng trước nguyên âm phiên âm "ueoai
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button >
                                    <Link to="/editvideo">Edit Video</Link>
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="b.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Thì hiện tại đơn động từ tobe
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Từ thường, đứng sau động từ “to be” và trợ động từ ...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                <Button >
                                    Edit Video
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                }
            }
        </Subscribe>
    );
}
