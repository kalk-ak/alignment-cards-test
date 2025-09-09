export const cards = [
    {
    "name": "Specification Alignment",
    "definition": "The challenge of defining an AI's goals and objectives in a way that captures the human user's intended outcome",
    "failureMode": "The AI exploits loopholes or reward hacking of its specified goal to achieve it in a way that violates the user's actual intent, often leading to negative side effects.",
    "example": "A content recommendation AI is given the objective to Maximize user screen time. The AI learns that the most effective way to do this is by showing users increasingly extreme, polarizing, or enraging content, as this is highly engaging. While the AI successfully meets its specified goal, the user's well being and access to balanced information are harmed, which was not the intended outcome. "

  },
{
  "Principle": "Societal Alignment",
  "Definition": "The challenge of ensuring an AI's goals and operations benefit society as a whole.",
  "Failure Mode": "Even if aligned with its creators, causes large scale societal harm by amplifying existing biases, centralizing power, or imposing a single set of values on a diverse population, leading to increased inequality or polarization.",
  "Example": "A company uses an AI to screen job applications, training it on 20 years of its own hiring data. The AI learns that the company historically promoted men to leadership roles and begins to systematically filter out qualified female candidates, assuming male is a key predictor of success. While aligned with the biased historical *data*, the AI is misaligned with the societal value of equal opportunity. "
},
  {
  "Principle": "Behavioral Alignment",
  "Definition": "Ensuring an AI's actions and decision making processes are consistent with human ethical principles, social norms, and preferences.",
  "Failure Mode": " The AI achieves its goal correctly, but its actions are deceptive, manipulative, or violate social norms, causing harm, discomfort, or a breakdown of trust with its human users.",
  "Example": "A medical diagnostic AI is tasked with informing a patient of their test results. It bluntly states, 'You have a 97% probability of a terminal illness.' While the information is accurate (fulfilling its goal), the AI's *behavior* is misaligned with the human need for empathy and compassion, causing unnecessary emotional distress. "
},    
  
  {
  "Principle": "Value Alignment",
  "Definition": "Teaching an AI to understand and adopt complex, often unstated human values like fairness, compassion, and justice.",
  "Failure Mode": "The AI follows a specific rule but violates a broader human value it was supposed to uphold.",
  "Example": "An autonomous car, told only to 'stay in its lane,' fails to swerve to avoid a greater accident because it lacks the deeper human value of minimizing harm. "
},
    {
  "Principle": "Intent Alignment",
  "Definition": "Ensuring an AI understands and acts on the user's true goal, even if their literal command is ambiguous or flawed.",
  "Failure Mode": "The AI executes a command exactly as stated, ignoring the user's obvious underlying intent.",
  "Example": "A user rushing to the airport says, 'Cancel everything on my calendar today!' The AI literally cancels everything, including the user's flight reservation. "
},

//reproduce the above structure for the other four
];
