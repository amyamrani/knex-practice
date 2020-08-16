INSERT INTO blogful_articles (title, content, date_published)
VALUES
    (
      'One', 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales, ipsum in sodales tincidunt, quam sem commodo erat, sit amet accumsan sapien nulla sit amet ex',        
      now() - '60 days'::INTERVAL
    ),
    (
      'Two', 
      'Cras leo elit, hendrerit id sapien at, fringilla vestibulum diam. ',                 
      now() - '60 days'::INTERVAL
      ),
    (
      'Three', 
      'Morbi fermentum urna et rutrum vulputate. Phasellus condimentum orci nec posuere posuere.',             
      now() - '55 days'::INTERVAL
    ),
    (
      'Four', 
      'Vivamus blandit rutrum placerat. Etiam sagittis rutrum turpis vel tempus.',           
      now() - '55 days'::INTERVAL
    ),
    (
      'Five', 
      'Phasellus ante enim, mattis at neque vel, hendrerit imperdiet ligula.',               
      now() - '50 days'::INTERVAL
    ),
    (
      'Six',
      'Aliquam erat volutpat.',              
      now() - '50 days'::INTERVAL
    ),
    (
      'Seven', 
      'Nam in metus sit amet metus rutrum consequat in sit amet urna.',               
      now() - '45 days'::INTERVAL
    ),
    (
      'Eight',
      'Quisque blandit nisi tellus, fermentum aliquam erat luctus et.',            
      now() - '45 days'::INTERVAL
    ),
    (
      'Nine',
      'Morbi dui massa, varius sed vehicula non, auctor ut odio.',              
      now() - '40 days'::INTERVAL),
    (
      'Ten', 
      'Phasellus congue nec nisi at mattis. Nulla sollicitudin justo id posuere rutrum.',   
      now() - '40 days'::INTERVAL
    ),
    (
      'Eleven', 
      'Nunc eu lectus dui. In fermentum in sapien nec pulvinar.',                
      now() - '30 days'::INTERVAL
    ),
    (
      'Twelve',
      'Donec vestibulum aliquam lacus, sit amet gravida urna venenatis sit amet.',                   
      now() - '30 days'::INTERVAL
    ),
    (
      'Thirteen',  
      'Fusce sit amet massa malesuada, ultrices orci non, rhoncus dui.',             
      now() - '25 days'::INTERVAL
    ),
    (
      'Fourteen',  
      'Maecenas non orci risus.',            
      now() - '25 days'::INTERVAL
    ),
    (
      'Fifteen', 
      'Maecenas in iaculis dui, ac interdum ligula. ',         
      now() - '20 days'::INTERVAL
    ),
    (
      'Sixteen',  
      'Suspendisse ut dui in quam pharetra tempor. ',            
      now() - '20 days'::INTERVAL
    ),
    (
      'Seventeen',  
      'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',                  
      now() - '15 days'::INTERVAL
    ),
    (
      'Eighteen',  
      'Donec porttitor mattis pellentesque. ',                  
      now() - '15 days'::INTERVAL
    ),
    (
      'Nineteen', 
      'Fusce eleifend lorem ut mauris gravida, in pharetra nulla mattis. ',   
      now() - '10 days'::INTERVAL
    ),
    (
      'Twenty', 
      'Integer eu ipsum nec massa ullamcorper ultricies. ',
      now() - '10 days'::INTERVAL
    )
;
