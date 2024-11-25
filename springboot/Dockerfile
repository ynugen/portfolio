FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/backend-application.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
