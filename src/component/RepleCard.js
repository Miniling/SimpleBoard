import { useRef, useState } from 'react';
import '../css/CommentCard.css';

export default function RepleCard(props) {
    const post = JSON.parse(localStorage.getItem('posts'));
    const reple = props.data; // 대댓글 데이터
    const pid = props.pid;  // 게시물 Index
    const cid = post[pid]['comments'].findIndex(e => e.id === props.cid);   // 댓글 Index

    const repleRef = useRef();

    const [isClicked, setIsClicked] = useState(false);

    // 댓글 수정 열고닫기
    const Switch = () => {
        setIsClicked(!isClicked);
    };

    const [comment, setPost] = useState({
        content: reple.content,
        date: reple.date,
    });
    const onContentChange = (event) => {
        setPost({
            ...comment,
            content: event.currentTarget.value
        });
    };

    return (
        <>
            <div className="card-top">
                <div className='card-content'>
                    {isClicked === false ?
                        <>
                            <a className='card-user'>
                                익명{reple.id + 1}
                            </a>
                            <a>{reple.content}</a>
                        </> :
                        <>
                            <textarea
                                className="content-update"
                                onChange={onContentChange}
                                value={comment.content}
                                placeholder="댓글을 입력해 주세요."
                                ref={repleRef}
                                type="text" />
                        </>
                    }
                </div>

                <div className='card-button'>
                    {isClicked === false ?
                        <>
                            <button
                                className="delete-button"
                                // onClick={() => delPost(reple.id)}
                                type="button"
                            >
                                삭제
                            </button>
                            <button
                                className="update-button"
                                onClick={() => Switch()}
                                type="button"
                            >
                                수정
                            </button>
                        </> :
                        <>
                            <button
                                className="update-button"
                                // onClick={() => updatePost(reple.id)}
                                type="button"
                            >
                                변경
                            </button>
                            <button
                                className="cancel-button"
                                onClick={() => Switch()}
                                type="button"
                            >
                                취소
                            </button>
                        </>}
                </div>
            </div>

            <div className="card-info">
                <a className='info-date'>
                    {reple.date}
                </a>
            </div>
        </>
    )
}