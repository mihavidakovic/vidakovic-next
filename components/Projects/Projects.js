import { useState, useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

import Project from '../Project/Project';

export default function Projects() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-100px');
  const [data, setData] = useState();

  useEffect(() => {
    setData([
          {
            "name": "NyonSport",
            "image": "/projects/nsg.jpg",
            "type": "Corporate identity & website design",
            "tags": ["logo", "web design", "buissines cards"],
            "temp": false
          },
          {
            "name": "covid19.si",
            "image": "/projects/covid19.jpg",
            "type": "Brand identity, website design & full-stack development",
            "tags": ["logo", "web design", "buissines cards"],
            "temp": false
          },
          {
            "name": "Dominvrt.si",
            "image": "/projects/dominvrt.jpg",
            "type": "Brand identity, website design & front-end development",
            "tags": ["logo", "web design", "buissines cards"],
            "temp": false
          },
          {
            "name": "Bibaleze.si",
            "image": "/projects/bibaleze.jpg",
            "type": "Brand identity, website design & front-end development",
            "tags": ["logo", "web design", "buissines cards"],
            "temp": false
          },
          {
            "name": "",
            "image": "",
            "type": "",
            "tags": [],
            "temp": true
          },
          {
            "name": "",
            "image": "",
            "type": "",
            "tags": [],
            "temp": true
          },
          {
            "name": "",
            "image": "",
            "type": "",
            "tags": [],
            "temp": true
          },
        ])
  }, [setData])


  if (data) {
    return (
      <div className={onScreen ? "projects fadeIn" : "projects"} ref={ref}>
        {data.map((project, key) => {
          return (
              <>
                <Project data={project} key={key} />
              </>
            )
        }) }
      </div>
    )
  } else {
    return (
      <div className={onScreen ? "projects fadeIn" : "projects"} ref={ref}>
        <p>loading</p>
      </div>

    )
  }
}
