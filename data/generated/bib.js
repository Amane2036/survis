﻿define({ entries : {
    "alrowais2025improv": {
        "abstract": "Artificial intelligence (AI) in music improvisation offers promising new avenues for developing human creativity. The difficulty of writing dynamic, flexible musical compositions in real time is discussed in this article. We explore using reinforcement learning (RL) techniques to create more interactive and responsive music creation systems. Here, the musical structures train an RL agent to navigate the complex space of musical possibilities to provide improvisations. The melodic framework in the input musical data is initially identified using bi-directional gated recurrent units. The lyrical concepts such as notes, chords, and rhythms from the recognised framework are transformed into a format suitable for RL input. The deep gradientbased reinforcement learning technique used in this research formulates a reward system that directs the agent to compose aesthetically intriguing and harmonically cohesive musical improvisations. The improvised music is further rendered in the MIDI format. The Bach Chorales dataset with six different attributes relevant to musical compositions is employed in implementing the present research. The model was set up in a containerised cloud environment and controlled for smooth load distribution. Five different parameters, such as pitch frequency (PF), standard pitch delay (SPD), average distance between peaks (ADP), note duration gradient (NDG) and pitch class gradient (PCG), are leveraged to assess the quality of the improvised music. The proposed model obtains +0.15 of PF, \u22120.43 of SPD, \u22120.07 of ADP and 0.0041 NDG, which is a better value than other improvisation methods.",
        "author": "Alrowais, Fadwa and Arasi, M. A. and Alotaibi, S. S. and Alonazi, M. and Marzouk, R. and Salama, A. S.",
        "doi": "10.7717/peerj-cs.2265",
        "evaluation": "Quantitative",
        "journal": "PeerJ Computer Science",
        "keywords": "type: Reinforcement learning, Gated recurrent units, Music improvisation, Cloud frameworks, Containerization",
        "pages": "e2265",
        "title": "Deep gradient reinforcement learning for music improvisation in cloud computing framework",
        "type": "article Reinforcement Learning",
        "volume": "11",
        "year": "2025"
    },
    "briot2020history": {
        "abstract": "The current wave of deep learning (the hyper-vitamined return of artificial neural networks) applies not only to traditional statistical machine learning tasks: prediction and classification (e.g., for weather prediction and pattern recognition), but has already conquered other areas, such as translation. A growing area of application is the generation of creative content, notably the case of music, the topic of this article. The motivation is in using the capacity of modern deep learning techniques to automatically learn musical styles from arbitrary musical corpora and then to generate musical samples from the estimated distribution, with some degree of control over the generation. This article provides a tutorial on music generation based on deep learning techniques. After a short introduction to the topic illustrated by a recent example, the article analyzes some early works from the late 1980s using artificial neural networks for music generation and how their pioneering contributions foreshadowed current techniques. Then, we introduce some conceptual framework to analyze various concepts and dimensions involved. Various examples of recent systems are introduced and analyzed to illustrate the variety of concerns and of techniques.",
        "author": "Briot, Jean-Pierre",
        "doi": "10.1007/s00521-020-05399-0",
        "evaluation": "Qualitative, Literature Review",
        "journal": "Neural Computing and Applications",
        "keywords": "type: Artificial neural networks, Deep learning, Music, Generation, Tutorial, Concepts, History, Trends",
        "title": "From artificial neural networks to deep learning for music generation: history, concepts and trends",
        "type": "article Survey",
        "year": "2020"
    },
    "cuesta2022voice": {
        "abstract": "This paper deals with the automatic transcription of four-part, a cappella singing, audio performances. In particular, we exploit an existing, deep-learning based, multiple F0 estimation method and complement it with two neural network architectures for voice assignment (VA) in order to create a music transcription system that converts an input audio mixture into four pitch contours. To train our VA models, we create a novel synthetic dataset by collecting 5381 choral music scores from public-domain music archives, which we make publicly available for further research. We compare the performance of the proposed VA models on different types of input data, as well as to a hidden Markov model-based baseline system. In addition, we assess the generalization capabilities of these models on audio recordings with differing pitch distributions and vocal music styles. Our experiments show that the two proposed models, a CNN and a ConvLSTM, have very similar performance, and both of them outperform the baseline HMM-based system. We also observe a high confusion rate between the alto and tenor voice parts, which commonly have overlapping pitch ranges, while the bass voice has the highest scores in all evaluated scenarios.",
        "author": "Cuesta, Hector and G\u00f3mez, Emilia",
        "doi": "10.5334/tismir.121",
        "evaluation": "Quantitative",
        "journal": "Transactions of the International Society for Music Information Retrieval",
        "keywords": "type: voice assignment, multi-pitch estimation, music information retrieval, vocal quartets, polyphonic vocal music, deep learning",
        "number": "1",
        "pages": "99",
        "title": "Voice Assignment in Vocal Quartets Using Deep Learning Models Based on Pitch Salience",
        "type": "article Symbolic Generation",
        "volume": "5",
        "year": "2022"
    },
    "dean2018improviser": {
        "abstract": "Two modest-sized symbolic corpora of post-tonal and post-metrical keyboard music have been constructed: one algorithmic and the other improvised. Deep learning models of each have been trained. The purpose was to obtain models with sufficient generalisation capacity that in response to separate fresh input seed material, they can generate outputs that are statistically distinctive, neither random nor recreative of the learned corpora or the seed material. This objective has been achieved, as judged by k-sample Anderson\u2013Darling and Cramer tests. Music has been generated using the approach, and preliminary informal judgements place it roughly on a par with an example of composed music in a related form. Future work will aim to enhance the model such that it deserves to be fully evaluated in relation to expression, meaning and utility in real-time performance.",
        "author": "Dean, Roger T. and Forth, Jonathan",
        "doi": "10.1007/s00521-018-3765-x",
        "evaluation": "Quantitative",
        "journal": "Neural Computing and Applications",
        "keywords": "type:Deep learning, Music, Post-tonal, Post-metrical, Improvisation",
        "title": "Towards a Deep Improviser: a prototype deep learning post-tonal free music generator",
        "type": "article Symbolic Generation",
        "year": "2018"
    },
    "dong2023genetic": {
        "abstract": "Music expresses thoughts and emotions in artistic form and is made up of different components including harmony, rhythm, and melody. Several musical elements are tied together during the songwriting process in order to generate melodies that are harmonic. A music melody is the essential element of any music to generate strong feelings from listeners and capture their interest. In the process of music appreciation, melody controls the emotional changes of music. It is an efficiently perceived part and the tone of a song. In recent years, Sichuan unvoiced music has developed rapidly and attracted much attention. This paper selects Sichuan unvoiced music as the main research theme and constructs a melody generation algorithm by utilizing the state-of-the-art techniques of deep learning (DL) and evolutionary algorithms (EAs) such as recurrent neural network-long short-term memory (RNN-LSTM) and genetic algorithm (GA). Firstly, this paper briefly describes the concept of DL algorithms, the deep generation model, and sequence to sequence model, as they constitute the technological foundation for this research. Secondly, this paper proposes a melody generation algorithm that utilizes RNN-LSTM for melody generation and GA for melody optimization. More specifically, the melody is generated by preprocessing data, creating, and training the RNN-LSTM model. A GA was used to determine the melodic fitness function for eight songs as the fitness function directly affects the selected termination condition. The fitness function can be thought of as either a person or an evolutionary rule. Finally, the average score of these songs, before and after evolution, is calculated, which demonstrates that the analysis and rotation creation methods are more precise and that the song\u2019s average melody score is higher. The method proposed in this study has been thoroughly compared to the existing approaches proposed in earlier studies, and it was found that the approach we propose is more effective in terms of accuracy and the average melody score.",
        "author": "Dong, Lei",
        "doi": "10.1007/s00500-023-09135-3",
        "evaluation": "Quantitative",
        "journal": "Soft Computing",
        "keywords": "type:Sichuan region music, Clear melody, Generation algorithm, Deep learning, Genetic algorithm",
        "number": "22",
        "pages": "17419--17433",
        "title": "Using deep learning and genetic algorithms for melody generation and optimization in music",
        "type": "article Symbolic Generation",
        "volume": "27",
        "year": "2023"
    },
    "dong2023windmusic": {
        "abstract": "Deep learning technology and graphics computing technology have made important progress in recent years, making video game technology develop. Western orchestral music based on video game technology has been significantly improved in both human\u2013computer experience and game fun. Therefore, an optimized reinforcement learning (Deep Q Networks, DQN) video game simulation algorithm is proposed. The first is to optimize the network activation function, integrate the ReLU and Softlus functions to design a new piecewise activation function, and use it as a fully connected function of the network. Secondly, the Gabor filter is improved and replaces the traditional filter of the network. Finally, the improved filter and the game image are used to obtain the directional features, and the dimensionality reduction of the features is realized by the kernel principal component analysis (PCA) method, the network training parameters are obtained, and the game simulation is completed. In order to verify the improved DQN game simulation model, two games were selected to participate in the experiment. In the game test of the orchestra simulator, the proposed ReLU-Softplus is the best in the orchestra experience, with the highest score of 126, while the average score of ReLU, Sigmaid, Tanh and ReLU-Softplus are 59.6, 57.2, 52.6 and 64.7. Compared with the other three functions, ReLU-Softplus has a 13.2% improvement. It can be seen that ReLU-Softplus has a better experience of wind games. We still take the pipe game as the test object, adopt the improved Gabor and ReLU-Softplus, and use KPCA to reduce the dimension of the game data features. When the curvature coefficient is 0.3, the DQN model has the highest score in the game test, with a score of 159.6, and the best average score is 93.5, which is better than 73.6 without the improved Gabor. It can be seen that the improved DQN game simulation algorithm can significantly optimize the game scoring effect. The research content has important reference value for improving the experience of western wind music video games and improving the game scoring mechanism.",
        "author": "Dong, Yuan",
        "doi": "10.1016/j.entcom.2023.100566",
        "evaluation": "Quantitative",
        "journal": "Entertainment Computing",
        "keywords": "type: DQN network, Western wind music, Deep learning, Video games, Simulation",
        "pages": "100566",
        "title": "Research on deep learning video game simulation algorithm based on western wind music",
        "type": "article Reinforcement Learning",
        "volume": "46",
        "year": "2023"
    },
    "fong2024emotion": {
        "abstract": "This paper develops a theory-based, explainable deep learning convolutional neural network (CNN) classifier to predict the time-varying emotional response to music. We design novel CNN filters that leverage the frequency harmonics structure from acoustic physics known to impact the perception of musical features. Our theory-based model is more parsimonious, but provides comparable predictive performance to atheoretical deep learning models, while performing better than models using handcrafted features. Our model can be complemented with handcrafted features, but the performance improvement is marginal. Importantly, the harmonics-based structure placed on the CNN filters provides better explainability for how the model predicts emotional response (valence and arousal), because emotion is closely related to consonance\u2014a perceptual feature defined by the alignment of harmonics. Finally, we illustrate the utility of our model with an application involving digital advertising. Motivated by YouTube\u2019s mid-roll ads, we conduct a lab experiment in which we exogenously insert ads at different times within videos. We find that ads placed in emotionally similar contexts increase ad engagement (lower skip rates, higher brand recall rates). Ad insertion based on emotional similarity metrics predicted by our th",
        "author": "Fong, Henry and Kumar, Vikas and Sudhir, K.",
        "doi": "10.1287/mksc.2022.0323",
        "evaluation": "Quantitative",
        "journal": "Marketing Science",
        "keywords": "type: Audio Data, Deep Learning, Explainable and Interpretable AI, Emotion, Digital Advertising, Music theory",
        "title": "A Theory-Based Explainable Deep Learning Architecture for Music Emotion",
        "type": "article Theory-Guided / Explainable Model",
        "year": "2024"
    },
    "gillick2021play": {
        "abstract": "We propose and evaluate an approach to incorporating multiple user-provided inputs, each demonstrating a complementary set of musical characteristics, to guide the output of a generative model for synthesizing short music performances or loops.  We focus on user inputs that describe both \u201cwhat to play\u201d (via scores in MIDI format)  and \u201chow to play it\u201d (via rhythmic inputs to specify expressive timing and dynamics).  Through experiments, we demonstrate that our method can facilitate human-AI co-creation of drum loops with diverse and customizable outputs.  In the process, we argue for the interaction paradigm of mapping by demonstration as a promising approach to working with deep learning models that are capable of generating complex and realistic musical parts.",
        "author": "Gillick, Jon and Bamman, David",
        "doi": "10.21428/92fbeb44.06e2d5f4",
        "evaluation": "Quantitative",
        "journal": "Proceedings of the AI Music Creativity Conference",
        "keywords": "type: Music Performance Modeling, Interactive Music Generation, Gesture Mapping, Human-AI Collaboration",
        "title": "What to Play and How to Play it: Guiding Generative Music Models with Multiple Demonstrations",
        "type": "article Human-AI Co-Creation",
        "year": "2021"
    },
    "knotts2020survey": {
        "abstract": "The recent proliferation of commercial software claiming ground in the field of music AI has provided opportunity to engage with AI in music making without the need to use libraries aimed at those with programming skills. Prepackaged music AI software has the potential to broaden access to machine learning tools but it is unclear how widely these softwares are used by music technologists or how engagement affects attitudes towards AI in music making. To interrogate these questions the authors undertook a survey in October 2019, gaining 117 responses. The survey collected statistical information on the use of pre-packaged and self-written music AI software. Respondents reported a range of musical outputs including producing recordings, live performance and generative work across many genres of music making. The survey also gauged general attitudes towards AI in music and provided an open field for general comments. The responses to the survey suggested a forward-looking attitude to music AI with participants often pointing to the future potential of AI tools, rather than present utility. Optimism was partially related to programming skill with those with more experience showing higher skepticism towards the current state and future potential of AI.",
        "author": "Knotts, Shelly and Collins, Nick",
        "doi": "10.5281/zenodo.4813499",
        "evaluation": "Questionnaire",
        "journal": "Zenodo",
        "keywords": "type: Music AI, survey, software, algorithmic composition, computeraided composition",
        "title": "A survey on the uptake of Music AI Software",
        "type": "article Survey",
        "year": "2020"
    },
    "nuttall2021transformer": {
        "abstract": "Recent applications of Transformer neural networks in the field of music have demonstrated their ability to effectively capture and emulate long-term dependencies characteristic of human notions of musicality and creative merit. We propose a novel approach to automated symbolic rhythm generation, where a Transformer-XL model trained on the Magenta Groove MIDI Dataset is used for the tasks of sequence generation and continuation. Hundreds of generations are evaluated using blind-listening tests to determine the extent to which the aspects of rhythm we understand to be valuable are learnt and reproduced. Our model is able to achieve a standard of rhythmic production comparable to human playing across arbitrarily long time periods and multiple playing styles.",
        "author": "Nuttall, Thomas and Haki, Behzad and Jord\u00e0, Sergi",
        "doi": "10.21428/92fbeb44.fe9a0d82",
        "evaluation": "Quantitative",
        "journal": "Zenodo",
        "keywords": "type: Transformer Neural Networks, Music Generation, Rhythm",
        "title": "Transformer Neural Networks for Automated Rhythm Generation",
        "type": "article Symbolic Generation",
        "year": "2021"
    }
}});