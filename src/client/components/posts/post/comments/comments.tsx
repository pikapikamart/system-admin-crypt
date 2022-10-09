import { Reply } from "@/src/server/models/post.model"
import { 
  CommentsWrapper,
  CommentsHeading,
  CommentsList,
  CommentsItem,
  CommentsItemHeader,
  CommentsItemUser,
  CommentsItemContent
 } from "./comments.styled"


type CommentsProps = {
  comments: Reply[]
}

const Comments = ({ comments }: CommentsProps) =>{

  return (
    <CommentsWrapper>
      <CommentsHeading>Comments</CommentsHeading>
      <CommentsList>
        { comments.reverse().map((comment, index) => (
          <CommentsItem key={ "comment" + index }>
            <CommentsItemHeader>
              <CommentsItemUser>
                { comment.owner.username }
                <span>@{ comment.owner.email }</span>
              </CommentsItemUser>
            </CommentsItemHeader>
            <CommentsItemContent>{ comment.content }</CommentsItemContent>
          </CommentsItem>
        )) }
      </CommentsList>
    </CommentsWrapper>
  )
}


export default Comments