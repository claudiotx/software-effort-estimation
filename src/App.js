import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import Steps from './components/Steps';
import Header from './components/Header';
import Totals from './components/Totals';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Print from './components/Print';
// import logo from './logo.svg';
import './App.scss';

const App = () => {
  const [totals, setTotals] = useState(0);
  // const [project, setProject] = useState({project: '', notes: ''});
  const DEFAULT_CLASS_NAME = 'fl w-100 w-25-ns bg-light-gray tc';
  const DEFAULT_DISABLED_CLASS_NAME = 'fl w-100 w-25-ns bg-light-gray tc o-20 disabled';
  const [stage1ClassName, setStage1Class] = useState(DEFAULT_DISABLED_CLASS_NAME);
  const [stage2ClassName, setStage2Class] = useState(DEFAULT_DISABLED_CLASS_NAME);
  const [stage3ClassName, setStage3Class] = useState(DEFAULT_DISABLED_CLASS_NAME);
  const [stage4ClassName, setStage4Class] = useState(DEFAULT_DISABLED_CLASS_NAME);
  const [stage5ClassName, setStage5Class] = useState(DEFAULT_DISABLED_CLASS_NAME);
  const [notesClassName, setNotesClass] = useState('fl w-100 w-25-ns bg-light-gray tc');
  const [totalsClassName, setTotalsClass] = useState(DEFAULT_DISABLED_CLASS_NAME);

  const step1Items = [
    {
      title: 'Design / UX',
      description: 'Is basic mockup / prototype / sketch required before development starts?',
      average: 2,
    },
    {
      title: 'R&D',
      description: 'Will there be any R&D required',
      average: 4,
    },
    {
      title: 'Diagrams',
      description: 'Creating basic class diagrams, sequence diagrams, activity diagrams, state machines ',
      average: 2,
    },
    {
      title: 'Meetings',
      description: 'Initial clarification and team meetings ',
      average: 1,
    },
    {
      title: 'Setup Environment',
      description: 'Setting up repositories and preparing working machines/editors/terminals',
      average: 1,
    }
  ];

  const step2Items = [
    {
      title: 'Database Dimension',
      description: 'Ignore complexity of the schemas, just count expected number of collections',
      average: 2,
    },
    {
      title: 'Functions',
      description: 'Roughly how many functions will it have? Over estimate here please',
      average: 30,
    },
    {
      title: 'Complex operations/algorithms',
      description: 'Complex algorithms tend to slow down the development process drastically',
      average: 3,
    },
    {
      title: 'API Endpoints',
      description: 'Amount of endpoints the system will have?',
      average: 3,
    },
    {
      title: 'Testing',
      description: 'How strong you want the tests to be?',
      average: 30,
    }
  ];

  const step3Items = [
    {
      title: 'Deployment',
      description: 'Deploying into a Kubernetes Cluster, Serverless Framework or Docker VM',
      average: 2,
    },
    {
      title: 'Continuous Delivery/Integration',
      description: 'Wiring up a CD/CI solution',
      average: 2,
    },
    {
      title: 'Telemetry and Metrics',
      description: 'Monitoring peformance and identify issues',
      average: 2,
    },
    {
      title: 'MicroServices',
      description: 'How many micro services the system will have?',
      average: 3,
    }
  ];

  const step4Items = [
    {
      title: 'Outside Constraints',
      description: 'Time to spend on outside constraints',
      average: 5,
    },
    {
      title: 'Meetings',
      description: 'Will there be weekly check point meetings with stakeholders?',
      average: 5,
    }
  ];

  const step5Items = [

    {
      title: 'Authentication',
      description: 'Will the system have authentication? How complex will it be? Simple JWT or oAuth2.0 or third party?',
      average: 5,
    },
    {
      title: 'Security',
      description: 'It this a prototype that does not require security, or is it a MVP? How many days to set security?',
      average: 5,
    },
    {
      title: 'Reports',
      description: 'Generation of SLA reports, stress tests, testing coverage',
      average: 5,
    }
  ];
  // We only want to fetch data when the component mounts.
  useEffect(() => {
    // const fetchHits = async() => {
    //   const { hits } = await index.search('');
    //   console.log('got hits', hits);
    //   setItems(hits);
    // };
    // fetchHits();
  }, []);

  // const addNewItem = cardInfo => {
  //   setItems(items.concat(cardInfo)) // do not mutate state
  // }

  const addToSteps = steps => {
    setTotals(totals + steps);
  }

  const handleNotesSubmit = (notes, projectName) => {
    // setProject({project: projectName, notes});
    setNotesClass(`${notesClassName} o-20 disabled`);
    setStage1Class(DEFAULT_CLASS_NAME);
  }

  return (
    <div>
      <Header />

      <article id="mainContainer" className="flex flex-wrap">
        <div className={notesClassName}>
          <h1>0. New Project</h1>
          <Notes  onSubmit={handleNotesSubmit}/>
        </div>
        <div className={stage1ClassName}>
          <h1>1. Provisioning</h1>
          <Steps stepItems={step1Items} onSubmit={(stepCount) => {
            addToSteps(stepCount);
            setStage1Class(`${stage1ClassName} o-20 disabled`);
            setStage2Class(DEFAULT_CLASS_NAME);
          }} />
        </div>
        <div className={stage2ClassName}>
          <h1>2. Development</h1>
          <Steps stepItems={step2Items} onSubmit={(stepCount) => {
            addToSteps(stepCount);
            setStage2Class(`${stage2ClassName} o-20 disabled`);
            setStage3Class(DEFAULT_CLASS_NAME);
          }} />
        </div>
        <div className={stage3ClassName}>
          <h1>3. Deployment</h1>
          <Steps stepItems={step3Items} onSubmit={(stepCount) => {
            addToSteps(stepCount);
            setStage3Class(`${stage3ClassName} o-20 disabled`);
            setStage4Class(DEFAULT_CLASS_NAME);
          }} />
        </div>
        <div className={stage4ClassName}>
          <h1>4. Constraints</h1>
          <Steps stepItems={step4Items} onSubmit={(stepCount) => {
            addToSteps(stepCount);
            setStage4Class(`${stage4ClassName} o-20 disabled`);
            setStage5Class(DEFAULT_CLASS_NAME);
          }} />
        </div>
        <div className={stage5ClassName}>
          <h1>5. Handover</h1>
          <Steps stepItems={step5Items} onSubmit={(stepCount) => {
            addToSteps(stepCount);
            setStage5Class(`${stage5ClassName} o-20 disabled`);
            setTotalsClass(DEFAULT_CLASS_NAME);
          }} />
        </div>
        <div className={totalsClassName}>
          <Totals total={totals}/>
        </div>
        <div className={totalsClassName}>
          <Print />
        </div>

      </article>

      <Footer />

      {/* <Form onSubmit={addNewItem} /> */}
      {/* <ItemsList items={items} /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


export default App;
