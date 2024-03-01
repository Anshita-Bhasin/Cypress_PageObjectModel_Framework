FROM cypress/base:18.11.0

WORKDIR /app


COPY . .

RUN npm install


CMD [ "npm", "run", "TestWithReportGeneration" ]

# docker image build
# docker image push
# docker run
