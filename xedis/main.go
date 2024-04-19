package main

import (
	"fmt"
	"log/slog"
	"net"
)

type Config struct {
	ListenAddr string
}

type Server struct {
	Config
	listener net.Listener
}

const dEFAULT_LISTEN_ADDR = ":5001"

func NewServer(config Config) *Server {
	if len(config.ListenAddr) == 0 {
		config.ListenAddr = dEFAULT_LISTEN_ADDR
	}
	return &Server{
		Config: config,
	}
}

func (s *Server) Start() error {
	listener, err := net.Listen("tcp", s.ListenAddr)
	if err != nil {
		return err
	}
	s.listener = listener
	s.acceptLoop()
	return nil
}

func (s *Server) acceptLoop() {
	for {
		conn, err := s.listener.Accept()
		if err != nil {
			slog.Error("accept error", "err", err)
			continue
		}
		go s.handleConn(conn)
	}
}

func (s *Server) handleConn(conn net.Conn) {

}

func main() {
	fmt.Println("Hello world")
}
