FROM circleci/python:2.7.14

COPY ./ /docs/

WORKDIR /docs/

RUN sudo pip install mkdocs-bootswatch==0.1.0
RUN sudo pip install mkdocs-bootstrap==0.1.1
RUN sudo pip install mkdocs==0.15.3
RUN sudo pip install mkdocs-material==0.2.4
RUN sudo pip install pymdown-extensions==6.2.1
EXPOSE 8080

CMD ["mkdocs", "serve"]
