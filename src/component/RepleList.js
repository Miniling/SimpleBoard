import RepleCard from "./RepleCard";

export default function RepleList(props) {
    const post = JSON.parse(localStorage.getItem('posts'));
    const pid = props.pid;  // 게시물 Index
    const id = post[pid]['comments'].findIndex(e => e.id === props.id);    // 댓글 Index

    return (
        <>
            <div>
                {post[pid].comments[id]['reply'].length === 0 ?
                    <a>잘되냐</a> :
                    <div className='board-list'>
                        {post[pid].comments[id]['reply'].map(reple => (
                            <li className="post-card">
                                <RepleCard
                                    data={reple}
                                    pid={pid}
                                    cid={props.id}
                                />
                            </li>
                        ))}
                    </div>}
            </div>
        </>
    )
}