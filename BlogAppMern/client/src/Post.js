export default function Post(){
    return(
        <div className="post">
        <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/08/Tumblr-GettyImages-1211208108.jpg?w=730&crop=1"
          alt=""
        />
        </div>
        
        <div className="texts">
          <h2>
            Tumblr tests semi-private groups
          </h2>
          <p className="info">
            <a className="author">Anjana Nigam</a>
            <time>2023-12-12 11:21</time>
          </p>
          <p className="summary">
            After scaling back operations and reassigning staff to other
            projects, Tumblr owner Automattic’s CEO Matt Mullenweg said that the
            company would home in on the parts of Tumblr’s service.
          </p>
        </div>
      </div>
    )
}